import ColorTheme from "./MyColorContext";
import ContextB from "./ContextB";
import ContextC from "./ContextC";
import ContextD from "./ContextD";

const ContextA = () => {
    const cores = {
        bkgA: "green",
        bkgB: "white",
        bkgC: "yellow",
        bkgD: "blue"
    };
    return (
        <ColorTheme.Provider value={cores}>
            <ContextB />
            <ContextC />
            <ContextD />
        </ColorTheme.Provider>
    );
};
export default ContextA;
