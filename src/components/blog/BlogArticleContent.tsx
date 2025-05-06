import React from "react";
import { motion } from "framer-motion";

interface BlogArticleContentProps {
  content: string;
}

const BlogArticleContent = ({ content }: BlogArticleContentProps) => {
  // If content is empty or undefined, show a message
  if (!content || content.trim() === "") {
    return (
      <div className="text-gray-500 italic">
        No content available for this article.
      </div>
    );
  }

  // If content is HTML, render it with dangerouslySetInnerHTML
  if (content.includes("<") && content.includes(">")) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-lg max-w-none"
      />
    );
  }

  // Otherwise, render it as plain text with paragraphs
  const paragraphs = content.split("\n\n").filter((p) => p.trim() !== "");

  if (paragraphs.length === 0) {
    return (
      <div className="text-gray-500 italic">
        No formatted content available for this article.
      </div>
    );
  }

  // Animation variants for different elements - simplified for visibility
  const headingVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const listVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const listItemVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph is a heading (starts with # or ##)
        if (paragraph.startsWith("# ")) {
          return (
            <motion.h1
              key={index}
              className="text-3xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, margin: "-50px" }}
            >
              {paragraph.substring(2)}
            </motion.h1>
          );
        } else if (paragraph.startsWith("## ")) {
          return (
            <motion.h2
              key={index}
              className="text-2xl font-bold mt-8 mb-4 text-purple-700"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.01, x: 5 }}
            >
              {paragraph.substring(3)}
            </motion.h2>
          );
        } else if (paragraph.startsWith("- ") || paragraph.match(/^\d+\. /)) {
          // Handle bullet points and numbered lists
          const items = paragraph
            .split("\n")
            .filter((item) => item.trim() !== "");
          const isNumbered = paragraph.match(/^\d+\. /);

          return (
            <motion.ul
              key={index}
              className={`${isNumbered ? "list-decimal" : "list-disc"} pl-6 mb-6 space-y-2`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={listVariants}
              viewport={{ once: true, margin: "-50px" }}
            >
              {items.map((item, itemIndex) => {
                // Remove the bullet point or number prefix
                const cleanItem = isNumbered
                  ? item.replace(/^\d+\. /, "")
                  : item.startsWith("- ")
                    ? item.substring(2)
                    : item;

                return (
                  <motion.li
                    key={itemIndex}
                    variants={listItemVariants}
                    className="pl-2 border-l-2 border-purple-200 ml-2"
                    whileHover={{ x: 5, color: "#9333ea" }}
                  >
                    {cleanItem}
                  </motion.li>
                );
              })}
            </motion.ul>
          );
        } else if (paragraph.startsWith("```") && paragraph.endsWith("```")) {
          // Handle code blocks
          const code = paragraph.substring(3, paragraph.length - 3);
          return (
            <motion.pre
              key={index}
              className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={paragraphVariants}
              viewport={{ once: true, margin: "-50px" }}
            >
              <code>{code}</code>
            </motion.pre>
          );
        } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
          // Handle bold text paragraphs
          return (
            <motion.p
              key={index}
              className="mb-4 font-bold"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={paragraphVariants}
              viewport={{ once: true, margin: "-50px" }}
            >
              {paragraph.substring(2, paragraph.length - 2)}
            </motion.p>
          );
        } else {
          return (
            <motion.p
              key={index}
              className="mb-4 text-gray-800"
              custom={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              style={{ opacity: 1 }}
            >
              {paragraph}
            </motion.p>
          );
        }
      })}
    </>
  );
};

export default BlogArticleContent;
