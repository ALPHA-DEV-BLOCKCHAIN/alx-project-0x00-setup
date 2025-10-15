import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      <div className="rounded-lg p-4 bg-white/0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <Button title="Small Rounded" styles="px-3 py-1 rounded-sm text-sm" />
        <Button title="Medium Rounded" styles="px-4 py-2 rounded-md text-base" />
        <Button title="Large Full" styles="px-6 py-3 rounded-full text-lg" />
      </div>
    </div>
  );
};

export default Landing;
