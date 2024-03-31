import ColorTheme from "./MyColorContext";

const ContextB = () => {
  return (
    <ColorTheme.Consumer>
      {
        (value) => {
          return (
            <div>
              <h1 style={{ color: value.bkgB }}>
                Context B
              </h1>
            </div>
          );
        }
      }
    </ColorTheme.Consumer>
  );
};

export default ContextB;
