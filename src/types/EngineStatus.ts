type EngineStatus = {
  success: boolean;
  version?: string;
  detail?: string;
  time_millis?: number;
  err?: Error;
  [key: string]: unknown ;
};

export type {
    EngineStatus,
}