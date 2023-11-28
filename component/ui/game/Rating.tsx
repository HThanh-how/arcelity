import React, { useState, FC, Ref } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
interface RatingProps {
  size: number;
  icon: string;
  scale: number;
  fillColor: string;
  strokeColor: string;
}

const Rating: FC<RatingProps> = React.forwardRef(
  (
    { size, icon, scale, fillColor, strokeColor },
    ref: Ref<HTMLInputElement>
  ) => {
    const [rating, setRating] = useState<number>(0);
    const buttons: JSX.Element[] = [];

    const onClick = (idx: number): void => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    interface RatingIconProps {
      fill: boolean;
    }

    const RatingIcon: FC<RatingIconProps> = ({ fill }) => {
      return (
        <Icon
          as={StarIcon}
          fontSize={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={() => onClick(0)}
          fillOpacity={fill ? "100%" : "0"}
        />
      );
    };

    interface RatingButtonProps {
      idx: number;
      fill: boolean;
    }

    const RatingButton: FC<RatingButtonProps> = ({ idx, fill }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack isInline mt={8} justify="center">
        <input
          name="rating"
          type="hidden"
          id="rating"
          value={rating}
          ref={ref}
        />
        {buttons}
      </Stack>
    );
  }
);

Rating.displayName = "Rating";

export default Rating;
