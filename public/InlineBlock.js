class InlineBlock {
    constructor(type, name, color) {
        this.element = 1;
        this.type = type;
        this.name = name;
        this.color = color;
        this.o = {
            "type": this.type,
            "message0": this.name,
            "args0": [],
            "colour": this.color,
            "inputsInline": true,
            "nextStatement": true,
            "previousStatement": true
        }
    }

    addField(name) {
        this.o["message0"] += ` ${name} %${this.element}`;
        this.o["args0"].push( {
            "type": "input_value",
            "name": name.toUpperCase(),
            "check": "String"
        } )
        this.element++;
    }

    addBlock() {
        let json = JSON.stringify(this.o);
        let parsed = JSON.parse(json);
        Blockly.Blocks[this.type] = {
            init: function() {
                this.jsonInit(parsed)
            }
        }
    }
}