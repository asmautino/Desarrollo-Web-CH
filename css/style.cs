/* Error: @use rules must be written before any other rules.
 *    ,
 * 32 |   @use '../mixins' as *;
 *    |   ^^^^^^^^^^^^^^^^^^^^^
 *    '
 *   scss\pages\_base.scss 32:3  @use
 *   scss\main.scss 19:1         root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: "Error: @use rules must be written before any other rules.\a    \2577 \a 32 \2502    @use '../mixins' as *;\d\a    \2502    ^^^^^^^^^^^^^^^^^^^^^\a    \2575 \a   scss\\pages\\_base.scss 32:3  @use\a   scss\\main.scss 19:1         root stylesheet";
}
