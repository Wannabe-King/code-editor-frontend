import { sampleInput } from "../utils/sampleCode";

export const InputTab = () => {
  return (
    <div className="p-2">
      <div className="text-lg">Input</div>
      <textarea
        name="inputArea"
        id="inputArea"
        className="w-80 h-96 bg-stone-200 text-slate-900 p-3"
      >
        {sampleInput}
      </textarea>
    </div>
  );
};
