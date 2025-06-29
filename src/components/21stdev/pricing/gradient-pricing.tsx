import { CheckIcon } from "lucide-react";

interface FeatureItemProps {
  children: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: {
    text: string;
    noCardRequired?: boolean;
    href?: string;
  };
  backgroundImage?: string;
}

interface GradientPricingProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export const GradientPricing: React.FC<GradientPricingProps> = ({ title, subtitle, plans }) => {
  return (
    <section className="overflow-hidden py-24 text-neutral-800 dark:text-neutral-50 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="mb-4 text-6xl tracking-tighter">
            {title}
          </h2>
          <p className="text-xl tracking-tight">
            {subtitle}
          </p>
        </div>
        <div className="-m-6 flex flex-wrap *:mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="w-full p-6 md:w-1/2 lg:w-1/3">
              {plan.highlighted ? (
                <div
                  className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
                  style={{
                    backgroundImage: plan.backgroundImage ? `url('${plan.backgroundImage}')` : undefined,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="h-full rounded-2xl bg-white dark:bg-neutral-900">
                    <div
                      className="p-12"
                      style={{
                        backgroundImage: plan.backgroundImage ? `url('${plan.backgroundImage}')` : undefined,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="pr-9">
                        <h4 className="mb-6 text-6xl tracking-tighter text-white">
                          {plan.name}
                        </h4>
                        <p className="mb-2 text-xl font-semibold tracking-tighter text-white">
                          {plan.price}
                        </p>
                        <p className="tracking-tight text-white">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-12 pb-11">
                      <ul className="-m-1.5 mb-11">
                        {plan.features.map((feature, i) => (
                          <FeatureItem key={i}>{feature}</FeatureItem>
                        ))}
                      </ul>
                      <PricingButton 
                        noCardRequired={plan.cta.noCardRequired}
                        href={plan.cta.href}
                      >
                        {plan.cta.text}
                      </PricingButton>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full transform-gpu flex-col justify-between rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900">
                  <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                    <div className="pr-9">
                      <h4 className="mb-6 text-6xl tracking-tighter">
                        {plan.name}
                      </h4>
                      <p className="mb-2 text-xl font-semibold tracking-tight">
                        {plan.price}
                      </p>
                      <p className="tracking-tight">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-12 pb-11">
                    {plan.features.length > 0 && (
                      <ul className="-m-1.5 mb-11">
                        {plan.features.map((feature, i) => (
                          <FeatureItem key={i}>{feature}</FeatureItem>
                        ))}
                      </ul>
                    )}
                    <PricingButton 
                      noCardRequired={plan.cta.noCardRequired}
                      href={plan.cta.href}
                    >
                      {plan.cta.text}
                    </PricingButton>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

GradientPricing.displayName = 'GradientPricing';

const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="mr-3 size-3" />
      <span className="font-medium tracking-tight">{children}</span>
    </li>
  );
};

interface PricingButtonProps {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}

const PricingButton: React.FC<PricingButtonProps> = ({
  children,
  href,
  noCardRequired,
}) => {
  return (
    <>
      <a
        className="inline-block w-full rounded-lg border border-neutral-700  bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800"
        href={href ?? ""}
      >
        {children}
      </a>
      {noCardRequired && (
        <span className="text-sm tracking-tight text-neutral-600">
          No credit card required
        </span>
      )}
    </>
  );
};