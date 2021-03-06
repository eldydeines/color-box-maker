# REACT Forms: Exercise 1 Color Box Maker

## Testing Requirements
Make sure both of these apps have tests. Here are the guidelines for testing:

Every component needs a smoke + snapshot test.
Critical Business Logic needs tests too. Use your judgement for this, but make sure you cover core functionality. Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.

## APP Requirements

App - this component should render the BoxList component.
BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component
Box- this component should display a div with a background color, width and height based on the props passed to it.
NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.
When each Box component is displayed, add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button should not be a separate component, it should be included in the Box component.