declare const _sfc_main: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: {
        visible: boolean;
        title?: string | undefined;
    };
    emits: {
        (event: 'update:visible', visible: boolean): void;
        (event: 'close'): void;
    };
    dialogVisible: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "close")[], "update:visible" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
