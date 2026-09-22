export type RcaSeverity = 'critical' | 'high' | 'medium' | 'low';
export type RcaPriority = 'P0' | 'P1' | 'P2' | 'P3';

export interface RcaVerdict {
    severity: RcaSeverity;
    priority: RcaPriority;
    rootCause: string;
    fixes: string[];
}

export async function analyzeFailure(input: {
    title: string;
    file: string;
    error: string;
    stack?: string;
}): Promise<RcaVerdict> {
    return {
        severity: 'medium',
        priority: 'P2',
        rootCause: `The test failed with: ${input.error}`,
        fixes: [
            'Review the failure details and stack trace.',
            `Inspect the test and its dependencies in ${input.file}.`,
        ],
    };
}