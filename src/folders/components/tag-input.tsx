import React from "react";
import { X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  tags: string[];
  setTags: (tags: string[]) => void;
  className?: string;
}

// const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
//     ({ className, type, ...props }, ref) => {

const TagInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, tags, setTags, className, ...props }, ref) => {
    const [input, setInput] = React.useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && input) {
        e.preventDefault();
        if (!tags?.includes(input)) {
          setTags([...(tags || []), input]);
          setInput("");
        }
      } else if (e.key === "Backspace" && !input && tags?.length > 0) {
        e.preventDefault();
        const newTags = [...(tags || [])];
        newTags.pop();
        setTags(newTags);
      }
    };

    const removeTag = (index: number) => {
      setTags(tags?.filter((_, i) => i !== index));
    };

    return (
      <div
        className={cn("flex flex-wrap gap-2 rounded-md border p-2", className)}
      >
        {tags?.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
            <button
              type="button"
              className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => removeTag(index)}
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <Input
          ref={ref}
          {...props}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    );
  }
);

export default TagInput;
