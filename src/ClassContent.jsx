import React from "react";
import ColorTheme from "./MyColorContext";

const cores = {
    bkgA: "green",
    bkgB: "white",
    bkgC: "yellow",
    bkgD: "blue"
};

class ClassA extends React.Component {
    render() {
        return (
            <ColorTheme.Provider value={cores}>
                <ClassB />
                <ClassC />
                <ClassD />
            </ColorTheme.Provider>
        );
    }
}

class ClassB extends React.Component {
    render() {
        let value = this.context;
        return (
            <div>
                <h1 style={{ color: value.bkgB }}>
                    Contexto B
                </h1>
            </div>
        );
    }
}
ClassB.contextType = ColorTheme;

class ClassC extends React.Component {
    render() {
        let value = this.context;
        return (
            <div>
                <h1 style={{ color: value.bkgC }}>
                    Contexto C
                </h1>
            </div>
        );
    }
}
ClassC.contextType = ColorTheme;

class ClassD extends React.Component {
    render() {
        let value = this.context;
        return (
            <div>
                <h1 style={{ color: value.bkgD }}>
                    Contexto D
                </h1>
            </div>
        );
    }
}
ClassD.contextType = ColorTheme;

export default ClassA;
