// import React, { useState, useContext } from 'react';
// import {
//   BtnBold,
//   Editor,
//   EditorProvider,
//   Toolbar,
//   BtnItalic,
//   BtnUnderline,
//   BtnStrikeThrough,
//   Separator,
//   BtnNumberedList,
//   BtnBulletList,
//   BtnLink,
// } from 'react-simple-wysiwyg';

// import { Button } from '@/components/ui/button';
// import { Brain } from 'lucide-react';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import { toast } from 'sonner';
// import { getAIChatSession } from './../../../../service/AIModel';

// const PROMPT =
//   'position title:{positionTitle}, Depending on position title give me 5-7 bullet points for my experience in resume, give me result in HTML format';

// function RichTextEditor({ onRichTextEditorChange, index }) {
//   const [value, setValue] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { resumeInfo } = useContext(ResumeInfoContext);

//   const GenerateSummaryFromAI = async () => {
//     if (!resumeInfo.experience[index].title) {
//       toast('Please add Position Title first');
//       return;
//     }

//     setLoading(true);

//     const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);

//     try {
//       const chatSession = await getAIChatSession();
//       const result = await chatSession.sendMessage(prompt);
//       const rawHtml = await result.response.text();

//       // Remove triple backticks and optional "html" language hint
//       const cleaned = rawHtml.replace(/^```html\s*|\s*```$/g, '').trim();

//       // ✅ Keep HTML to preserve bullet points
//       setValue(cleaned);
//       onRichTextEditorChange({ target: { value: cleaned } });
//     } catch (err) {
//       console.error('AI generation failed:', err);
//       toast('AI generation failed. Check console.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between my-2">
//         <label className="text-xs">Summary</label>
//         <Button
//           onClick={GenerateSummaryFromAI}
//           variant="outline"
//           size="sm"
//           className="flex gap-2 border-violet-600 text-violet-600"
//           disabled={loading}
//         >
//           <Brain className="h-4 w-4" />
//           {loading ? 'Generating...' : 'Generate from AI'}
//         </Button>
//       </div>

//       <EditorProvider>
//         <Editor
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//             onRichTextEditorChange(e);
//           }}
//         >
//           <Toolbar>
//             <BtnBold />
//             <BtnItalic />
//             <BtnUnderline />
//             <BtnStrikeThrough />
//             <Separator />
//             <BtnNumberedList />
//             <BtnBulletList />
//             <Separator />
//             <BtnLink />
//           </Toolbar>
//         </Editor>
//       </EditorProvider>
//     </div>
//   );
// }

// export default RichTextEditor;


import React, { useState, useContext, useEffect } from 'react';
import {
  BtnBold,
  Editor,
  EditorProvider,
  Toolbar,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  Separator,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
} from 'react-simple-wysiwyg';

import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from 'sonner';
import { getAIChatSession } from './../../../../service/AIModel';

const PROMPT =
  'position title:{positionTitle}, Depending on position title give me 5-7 bullet points for my experience in resume, give me result in HTML format';

function RichTextEditor({ onRichTextEditorChange, index, value: propValue }) {
  const [value, setValue] = useState(propValue || '');
  const [loading, setLoading] = useState(false);
  const { resumeInfo } = useContext(ResumeInfoContext);

  useEffect(() => {
    setValue(propValue || '');
  }, [propValue]);

  const GenerateSummaryFromAI = async () => {
    if (!resumeInfo.experience[index].title) {
      toast('Please add Position Title first');
      return;
    }

    setLoading(true);

    const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);

    try {
      const chatSession = await getAIChatSession();
      const result = await chatSession.sendMessage(prompt);
      const rawHtml = await result.response.text();
      const cleaned = rawHtml.replace(/^```html\s*|\s*```$/g, '').trim();

      setValue(cleaned);
      onRichTextEditorChange(cleaned); // ✅ Pass plain string
    } catch (err) {
      console.error('AI generation failed:', err);
      toast('AI generation failed. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          onClick={GenerateSummaryFromAI}
          variant="outline"
          size="sm"
          className="flex gap-2 border-violet-600 text-violet-600"
          disabled={loading}
        >
          <Brain className="h-4 w-4" />
          {loading ? 'Generating...' : 'Generate from AI'}
        </Button>
      </div>

      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e.target.value); // ✅ Send plain string
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
