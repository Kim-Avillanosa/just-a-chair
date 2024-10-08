import { MeshStandardMaterialProps } from "@react-three/fiber";
import ChairSeat from "./chair-seat";
import ChairBackRest from "./chair-back-rest";
import ChairLegs from "./chair-legs";

export interface ChairProperties {}

const Chair = ({ ...rest }: ChairProperties) => {
  return (
    <>
      <ChairSeat {...rest} />
      <ChairBackRest {...rest} />
      <ChairLegs {...rest} />
    </>
  );
};

export default Chair;
