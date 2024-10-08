import { useChairSizeStore } from "./hooks/useChairSize";
import SizeRadioBox from "./size-radio-box";

type SizeOptionProps = {
  label: string;
  value: keyof ChairSize;
};

const ChairSizeEditor = () => {
  const { size, setSize } = useChairSizeStore((s) => s);
  const sizeOptions: SizeOptionProps[] = [
    { label: "Short", value: "short" },
    { label: "Medium", value: "medium" },
    { label: "Long", value: "long" },
    { label: "Extra Long", value: "extraLong" },
  ];

  const handleSizeChange = (size: keyof ChairSize) => {
    console.log("Selected Size:", size);
    setSize(size);
  };
  return (
    <div
      style={{
        color: "#212121",
        marginTop: "10px",
        background: "#f1f2f6",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1>CHAIR STYLE</h1>
      <SizeRadioBox options={sizeOptions} onSizeChange={e=> handleSizeChange(e)} />
    </div>
  );
};

export default ChairSizeEditor;
