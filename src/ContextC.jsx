import ColorTheme from "./MyColorContext";

const ContextC = () => {
  return (
    <ColorTheme.Consumer>
      {
        (value) => {
          return (
            <div>
              <h1 style={{ color: value.bkgC }}>
                Context C
              </h1>
            </div>
          );
        }
      }
    </ColorTheme.Consumer>
  );
};

export default ContextC;
