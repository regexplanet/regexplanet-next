type EngineStatus = {
  success: boolean;
  version?: string;
  time_millis?: number;
  err?: Error;
};

export type {
    EngineStatus,
}