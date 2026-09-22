export interface VerifiedLocator {
    selector: string;
    strategy: string;
    matchCount: number;
    visible: boolean;
    reasoning: string;
}

export interface RejectedLocator {
    selector: string;
    reason: string;
}

export interface HealReport {
    failedSelector: string;
    intent: string;
    verified: VerifiedLocator[];
    rejected: RejectedLocator[];
    unavailableReason?: string;
}