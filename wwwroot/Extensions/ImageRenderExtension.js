
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
        var button1 = new Autodesk.Viewing.UI.Button('show-env-bg-button');
        button1.onClick = function (e) {
            readDepthAndNormalMaps(viewer)
        };
        button1.addClass('show-env-bg-button');
        button1.setToolTip('Sacar normales y profundidad');

        // SubToolbar
        this.subToolbar = new Autodesk.Viewing.UI.ControlGroup('my-custom-toolbar');
        this.subToolbar.addControl(button1);

        toolbar.addControl(this.subToolbar);
    }
}


Autodesk.Viewing.theExtensionManager.registerExtension('ToolbarExtension', ToolbarExtension);


