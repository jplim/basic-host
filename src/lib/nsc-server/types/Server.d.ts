import '@luigi-project/core';
export declare class Server {
    private messageManager;
    private luigiCoreEl;
    private initialUrl;
    constructor(selector: string);
    navigate(nodePath: string): void;
    fetchConfig(): Promise<{
        layers: any;
        actions: string;
        scenarios: any;
        boTypes: any;
    } | undefined>;
    onClientLoaded(callback: Function): void;
    onClientInitialized(callback: Function): void;
    onSemanticObjectNavigation(callback: Function): void;
    fireCenter(): void;
    fireZoomIn(): void;
    fireZoomOut(): void;
    fireLoadGeometries(geometries: any): void;
    private getConfig;
    private loadConfig;
    private constructAction;
    private actionNavigate;
    private contructSemanticObjectParameters;
    private handlebarReplacement;
}
