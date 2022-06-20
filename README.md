# Custom Redux implementation

> Run this like a standard nextjs app or proceed to a deployed vercel instance.

This is an attempt to reimplement redux syncing 2 components in the tree.

![Deployed on Vercel](https://manual-redux.vercel.app)

## Notes

The most challenging bit seems to be updating components with listeners, avoiding double render and ensuring that the process is performant.

Definitely not production-ready and not an ideal core solution.

Both Redux and Zustand seem to be doing this by relying on context,
https://github.com/reduxjs/react-redux/blob/master/src/hooks/useSelector.ts#L31
https://github.com/pmndrs/zustand/blob/main/src/context.ts#L30
