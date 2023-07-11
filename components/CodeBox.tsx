import { Highlight, themes } from 'prism-react-renderer'

const CodeBox = ({ children, className }: any) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight theme={themes.nightOwl} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            ' overflow-x-auto rounded-md dark:brightness-125 dark:border dark:border-gray-900 bg-gray-900'
          }
          style={{ ...style, padding: '20px', backgroundColor: '' }}
        >
          {tokens.slice(0, -1).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBox
