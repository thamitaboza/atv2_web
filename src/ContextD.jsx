import ColorTheme from "./MyColorContext";

const ContextD = () => {
  return (
    <ColorTheme.Consumer>
      {
        (value) => {
          return (
            <div>
              <h1 style={{ color: value.bkgD }}>
                Context D
              </h1>
            </div>
          );
        }
      }
    </ColorTheme.Consumer>
  );
};

export default ContextD;
