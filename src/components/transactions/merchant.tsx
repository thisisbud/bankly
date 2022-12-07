export const Merchant = ({ name }: { name: string }) => (
  <div className="avatar" aria-hidden="true">
    {name.charAt(0)}
  </div>
);
