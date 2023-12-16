import URLInput from "./URLInput";
import OutputURL from "./OutputURL";

export default function URLForm() {
  return (
    <div className="url-form">
      <h1>URL SHORTNER</h1>
      <URLInput />
      <OutputURL />
    </div>
  );
}
