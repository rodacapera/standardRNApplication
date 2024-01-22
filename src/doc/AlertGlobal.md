# File with heading

This is a file with a top-level heading

[^1]: This is the first footnote.
[^bignote]:
    Here's one with multiple paragraphs and code. Indent paragraphs to include them in the footnote.
    `{
<CustomAlert
    icon="alert"
    title="Gio"
    description="This is the description"
    labelButtonSuccess="continue"
    labelButtonCancel="Cancel"
    visible={alertVisible}
    setVisible={setAlertVisible}
    successAction={handleAlertSuccessAction}
  />
}`
    Here's a simple footnote,[^1] and here's a longer one.[^bignote]
