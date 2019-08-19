export interface Config {
    url: string,
    language: string,
    replacedates: boolean
}

module.exports = function (RED: any) {
    function icalConfig(config) {
        RED.nodes.createNode(this, config);
		
        this.url = config.url;
        
        this.name= config.name;
        this.language= config.language;
        this.replacedates= config.replacedates;
    }
  
    RED.nodes.registerType("ical-config", icalConfig);
}