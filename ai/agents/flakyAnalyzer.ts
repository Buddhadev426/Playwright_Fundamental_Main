export type BuildStatus = 'passed' | 'failed' | 'skipped' | 'timedOut';

export interface BuildSummary {
    runId: string;
    tests: Record<string, BuildStatus>;
}

export interface FlakyResult {
    flaky: string[];
    counts: { flaky: number; failing: number; total: number };
    summary?: string;
}

export async function analyzeFlaky(
    previous: BuildSummary,
    current: BuildSummary,
    includeAiSummary = false,
): Promise<FlakyResult> {
    const testNames = new Set([
        ...Object.keys(previous.tests),
        ...Object.keys(current.tests),
    ]);
    const flaky: string[] = [];

    for (const testName of testNames) {
        const previousStatus = previous.tests[testName];
        const currentStatus = current.tests[testName];
        if (previousStatus && currentStatus && previousStatus !== currentStatus) {
            flaky.push(testName);
        }
    }

    const failing = Object.values(current.tests).filter(
        (status) => status === 'failed' || status === 'timedOut',
    ).length;

    return {
        flaky,
        counts: { flaky: flaky.length, failing, total: testNames.size },
        summary: includeAiSummary ? 'Status changes were detected between the two builds.' : undefined,
    };
}