
class ToolbarExtension extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
        this.viewsNames = {};
    }

    load() {
        // Set background environment to "Infinity Pool"
        // and make sure the environment background texture is visible
        this.viewer.setLightPreset(6);
        this.viewer.setEnvMapBackground(true);

        // Ensure the model is centered
        this.viewer.fitToView();

        return true;
    };

    unload() {
        // nothing yet
    };

    onToolbarCreated(toolbar) {
        // alert('TODO: customize Viewer toolbar');

        var viewer = this.viewer;

        // Button 1
        var button1 = new Autodesk.Viewing.UI.Button('Sacar Normales');
        var button2 = new Autodesk.Viewing.UI.Button('Sacar Captura');
        button1.onClick = function (e) {
            readDepthAndNormalMaps(viewer);
        };
        button1.addClass('normal-button');
        button1.setToolTip('Sacar normales y profundidad');

        button2.onClick = function (e) {
            sacaCaptura(viewer);
        };
        button2.addClass('snap-button');
        button2.setToolTip('Snap and send to comfy');

        // SubToolbar
        this.subToolbar = new Autodesk.Viewing.UI.ControlGroup('my-custom-toolbar');
        this.subToolbar.addControl(button1);
        this.subToolbar.addControl(button2);

        toolbar.addControl(this.subToolbar);
    }
}


Autodesk.Viewing.theExtensionManager.registerExtension('ToolbarExtension', ToolbarExtension);


