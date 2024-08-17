import { Card } from "antd";

const CardComponent = ({ cardDetails, className }) => {
  const { title, description } = cardDetails;
  return (
    <div className="flex justify-center items-center h-full w-[20rem] md:w-full">
      <Card
        title={<strong>{title}</strong>}
        bordered={false}
        className={className + " h-full w-full"}
      >
        <p>{description}</p>
      </Card>
    </div>
  );
};

export default CardComponent;
