import React, { useState } from "react";
import Box from "@mui/material/Box";
import { StyledEngineProvider } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as CodeEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

function Editor({ heading, icon, bgcolor, value, onchange }) {
  const [open, setOpen] = useState(true);
  return (
    <StyledEngineProvider injectFirst>
      <Box
        style={{
          flexGrow: open ? 1 : 0,
          flexBasis: 0,
          display: "flex",
          flexDirection: "column",
          padding: "0 10px 10px ",
        }}
      >
        <Box className=" flex flex-col  bg-[#060606] justify-center  ">
          <Box className="  flex items-center justify-between ">
            <Box className="flex   justify-start items-center p-2  bg-[#1d1e22] gap-1">
              <div
                className="p-[1px] px-2 rounded-md "
                style={{ background: bgcolor }}
              >
                {" "}
                {icon}
              </div>
              <p className="text-gray-200 font-bold  text-lg"> {heading}</p>
            </Box>
            <Box className="">
              <CloseFullscreenIcon
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </Box>
          </Box>
          <CodeEditor
            className="controlled-editor"
            options={{
              theme: "material",
              lineNumbers: true,
            }}
            value={value}
            onBeforeChange={(editor, data, value) => {
              onchange(value);
            }}
          />
        </Box>
      </Box>
    </StyledEngineProvider>
  );
}

export default Editor;
