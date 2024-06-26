import { describe, expect, it } from "vitest";
import { reactive } from "vue";
import { usePosition } from "../usePosition";

describe("usePosition", () => {
  it("get position", () => {
    const pos = {
      x: 1,
      y: 1,
    };

    const { position } = usePosition(pos);

    expect(position.value).toEqual({
      left: "32px",
      top: "32px",
    });
  });

  it("position change", () => {
    const pos = reactive({
      x: 1,
      y: 1,
    });

    const { position } = usePosition(pos);

    pos.x = 2;

    expect(position.value).toEqual({
      left: "64px",
      top: "32px",
    });
  });
  it("should set setp", () => {
    const pos = {
      x: 1,
      y: 1,
    };

    const { position } = usePosition(pos, 34);

    expect(position.value).toEqual({
      left: "34px",
      top: "34px",
    });
  });
});
