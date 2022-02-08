import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a Denture-themed clone of the game Wordle created by the super talented Hannah Park and slightly modified by DenSureFit -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"  target="_blank" rel="noreferrer"
        >
          check out Hannah's code or play the original here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
