function InitializeColorPicker()
{
    jscolor.presets.default = {
        format: 'hex',
        width: 200,
        height: 200,
        position: 'bottom',
        palette: [
            '#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26',
            '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
            '#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d',
            '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
        ],
        paletteCols: 10,
        value: '#ec1c23',
        borderRadius: 0,
        previewSize: 100,
        shadow: false,
        closeButton: true,
        closeText: 'OK',
        buttonHeight: 20
    };
}