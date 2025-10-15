import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Render the Card component multiple times */}
      <Card />
      <Card />
      <Card />
      <Card />

      {/* Add the buttons below the cards */}
      <div className="flex flex-col gap-3 mt-6">
        <Button title="Small Rounded" styleClass="px-3 py-1 rounded-sm text-sm" />
        <Button title="Medium Rounded" styleClass="px-4 py-2 rounded-md text-base" />
        <Button title="Large Full" styleClass="px-6 py-3 rounded-full text-lg" />
      </div>
    </div>
  );
};

export default Landing;
