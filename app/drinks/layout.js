const layout = ({ children }) => {
  return (
    <article className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code> npx create-next-app tutorial</code>
        </pre>
      </div>
      {children}
    </article>
  );
};

export default layout;
