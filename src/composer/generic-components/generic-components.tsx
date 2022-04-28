


// CRUD(Create, Read, Update, Delete) LR(Local, Remote) SM(Single, Multi)
export type ViewType = 
    'CLS'|
    'CLM'|
    'CRS'|
    'CRM'|
    'RLS'|
    'RLM'|
    'RRS'|
    'RRM'|
    'ULS'|
    'ULM'|
    'URS'|
    'URM'|
    'DLS'|
    'DLM'|
    'DRS'|
    'DRM'
;
export interface EntityComponents{
    // components: {[K in keyof ViewType]: () => React.ReactNode}; 
    /**TODO: return type should be a generic React Component*/
    'CLS'?: () => React.ReactNode;
    'CLM'?: () => React.ReactNode;
    'CRS'?: () => React.ReactNode;
    'CRM'?: () => React.ReactNode;
    'RLS'?: () => React.ReactNode;
    'RLM'?: () => React.ReactNode;
    'RRS'?: () => React.ReactNode;
    'RRM'?: () => React.ReactNode;
    'ULS'?: () => React.ReactNode;
    'ULM'?: () => React.ReactNode;
    'URS'?: () => React.ReactNode;
    'URM'?: () => React.ReactNode;
    'DLS'?: () => React.ReactNode;
    'DLM'?: () => React.ReactNode;
    'DRS'?: () => React.ReactNode;
    'DRM'?: () => React.ReactNode;
}