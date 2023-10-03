import React, { useContext } from "react";
import Editor from "./Editor";
import { Box } from "@mui/material";
import { DataContext } from "../context/DataProvider";
function Code() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Box className="flex  bg-[#060606] ">
      <Editor
        heading="HTML"
        icon="/"
        bgcolor="#FF3C41"
        value={html}
        onchange={setHtml}
      />
      <Editor
        heading={"CSS"}
        icon={"*"}
        bgcolor="#0EBEFF"
        value={css}
        onchange={setCss}
      />
      <Editor
        heading={"JS"}
        icon={"( )"}
        bgcolor="#FCD000"
        value={js}
        onchange={setJs}
      />
    </Box>
  );
}

export default Code;
