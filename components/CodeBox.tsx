import { Highlight, themes } from 'prism-react-renderer'

const CodeBox = ({ className, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <Highlight
      theme={themes.nightOwl}
      code={props.children}
      language={match[1]}
    >
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
  ) : (
    <code
      className='rounded py-1 px-2 shadow-md bg-gray-100 dark:bg-gray-700'
      {...props}
    />
  )
}

export default CodeBox
