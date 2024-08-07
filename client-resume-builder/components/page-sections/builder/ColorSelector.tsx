import React, { useEffect, useState } from "react";
import TemplateColors from "@/data/colors";
import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import { setColor } from "@/app/store/formSlice";

interface ColorProps {
  id: string;
  primary: string;
  secondary: string;
}

function ColorSelector() {
  const dispatch = useAppDispatch();
  const colorState = useAppSelector((state) => state.color);

  const [activeColorId, setActiveColorId] = useState(colorState.id);

  useEffect(() => {
    setActiveColorId(colorState.id);
  }, [colorState.id]);

  const findActiveColors = (colors: ColorProps[]) => {
    const activeColor =
      colors.find((color) => color.id === activeColorId) || colors[0];

    return activeColor;
  };

  const findActiveColor = (colors: ColorProps[]) => {
    const activeColor = colors.find((color) => color.id === activeColorId);

    return activeColor;
  };

  const findInActiveColors = (colors: ColorProps[]) => {
    const inActiveColors = colors.filter(
      (color) => color.id !== findActiveColors(colors).id
    );

    return inActiveColors;
  };

  const selectColor = (color: ColorProps) => {
    dispatch(setColor(color));
  };

  return (
    <SelectorWrapper className="flex gap-4 absolute z-10">
      <p className="text-lg font-bold mt-[6px] text-nowrap">
        Try other Colors:
      </p>
      <div className="flex gap-2">
        {TemplateColors.map((colorSet, index) => (
          <div key={index} className="colors-wrapper">
            <div className="flex flex-col gap-3 rounded-md content">
              <StyledButton
                bg={findActiveColors(colorSet.children).primary}
                onClick={() => {
                  const activeColor = findActiveColors(colorSet.children);
                  selectColor(activeColor);
                }}
              >
                {findActiveColor(colorSet.children) && <ImCheckmark />}
              </StyledButton>
              <div className="inactive-colors  gap-3">
                {findInActiveColors(colorSet.children).map((color, index) => (
                  <StyledButton
                    bg={color.primary}
                    key={index}
                    onClick={() => selectColor(color)}
                  ></StyledButton>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SelectorWrapper>
  );
}

const SelectorWrapper = styled.div`
  .colors-wrapper {
    :hover {
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);

      .inactive-colors {
        display: flex;
      }
    }
    .content {
      padding: 5px 8px;
    }

    .inactive-colors {
      box-shadow: none;
      display: none;
      flex-direction: column;
    }
  }
`;

const StyledButton = styled.button<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
`;

export default ColorSelector;
