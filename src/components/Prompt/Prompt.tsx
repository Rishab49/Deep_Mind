let promptStyle = {
  flex: {
    display: "flex",
  },
  none: {
    display: "none",
  },
};

export default function Prompt({ isVisible, children }: any) {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#ffffffbf] filter:blur(10px)"
      style={isVisible ? promptStyle["flex"] : promptStyle["none"]}
    >
      <div className="flex flex-col items-stretch justify-center h-fit w-fit">
        {children}
      </div>
    </div>
  );
}
