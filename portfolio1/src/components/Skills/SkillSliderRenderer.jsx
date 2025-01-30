import SkillsSlider from "./SkillsSlider";
import React from 'react'
import { top_skills } from "../../data/skills";
import "../../pages/pagesCSS/Slider.css";

function SkillSliderRenderer() {
  return (
    <div className="p-4">
        <SkillsSlider skills={top_skills} />
      </div>
  )
}

export default SkillSliderRenderer