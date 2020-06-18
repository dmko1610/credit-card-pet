

const TopRow = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Hologram />
      <PaySystemLogo />
    </View>
  );
};

export default TopRow;
