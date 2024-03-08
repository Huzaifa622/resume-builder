"use client";

import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useSetDefaultScale } from "./hooks";
import { usePDF } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

const ResumeControlBar = ({
  scale,
  setScale,
  documentSize,
  document,
  fileName,
}: {
  scale: number;
  setScale: (scale: number) => void;
  documentSize: string;
  document: JSX.Element;
  fileName: string;
}) => {
  const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
    setScale,
    documentSize,
  });
  const [data, setData] = useState({});
  const [instance, update] = usePDF({ document });
  console.log(data);
  useEffect(() => {
    update(document);
  }, [update, document]);
  useEffect(() => {
    setData(
      JSON.parse(window.localStorage.getItem("resume-builder-parser-state")!)
    );
  }, [window.localStorage.getItem("resume-builder-parser-state")]);
  return (
    <div className="sticky bottom-0 left-0 right-0 flex h-[var(--resume-control-bar-height)]  items-center justify-center px-[var(--resume-padding)] text-gray-600 lg:justify-between">
      <a
        className="ml-1 flex items-center gap-1 rounded-md border border-gray-300 px-3 py-0.5 hover:bg-gray-100 lg:ml-8 cursor-pointer"
        // href={instance.url!}

        // download={fileName}
        onClick={(e) => {
          if (
            !data?.resume?.profile?.name ||
            !data?.resume?.profile?.email ||
            !data?.resume.profile?.phone ||
            !data?.resume.profile?.location
          ) {
            return window.alert("No required field filled out");
          } else {
            e.currentTarget.href = instance.url!;
            e.currentTarget.download = fileName;
          }
        }}
      >
        <ArrowDownTrayIcon className="h-4 w-4" />
        <span className="whitespace-nowrap">Download Resume</span>
      </a>
    </div>
  );
};

export const ResumeControlBarCSR = dynamic(
  () => Promise.resolve(ResumeControlBar),
  {
    ssr: false,
  }
);
