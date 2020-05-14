export interface IJob {
    uuid: string;
    suggestion: string;
    normalized_job_title: string;
    parent_uuid?: string;
}
