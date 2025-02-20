"use client"

import { useSelector } from "react-redux";
import HoistingImg from "../../../public/Hoisting.webp"

import ConceptsCard from "./ConceptsCard";

export default function Concepts() {
    const themeSelect = useSelector((state) => state.Theme.theme);
    return <div>
        <ConceptsCard title={"Hoisting"} src={HoistingImg} text={`Hoisting in JavaScript moves declarations to the top of their scope, allowing use before definition. Only declarations are hoisted, not initializations.`} theme={themeSelect}/>
    </div>
}