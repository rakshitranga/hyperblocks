$(document).ready(() => {
    const workspace = Blockly.inject('workspace', {
        toolbox: document.getElementById('toolbox'),
        sounds: false,
    });
    let img = new InlineBlock("img", "image", "blue");
    img.addField("source");
    img.addField("alternate");
    img.addBlock()
})