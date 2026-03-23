const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'components', 'Education', 'Education.jsx');
let content = fs.readFileSync(file, 'utf8');

// Remove accessForms
content = content.replace(/const accessForms = \{[\s\S]*?\n\};\n/g, '');

// Remove AccessFormModal
content = content.replace(/const AccessFormModal = \(\{ formKey, onClose \}\) => \{[\s\S]*?;\n\};\n/g, '');

// Fix TierCard signature
content = content.replace(
  'const TierCard = ({ tier, index, onOpenForm }) => {',
  'const TierCard = ({ tier, index }) => {'
);

// Fix TierCard jsx
const tierCardOld = `      {tier.ctaForm ? (
        <button className={styles.tierCta}
          style={{ background: tier.color + '18', borderColor: tier.border, color: tier.color }}
          onClick={() => onOpenForm(tier.ctaForm)}>
          {tier.cta} <ChevronRight size={14} />
        </button>
      ) : tier.ctaExternal ? (`;
const tierCardNew = `      {tier.ctaExternal ? (`;
content = content.replace(tierCardOld, tierCardNew);

// Remove activeForm state
content = content.replace(/  const \[activeForm, setActiveForm\] = useState\(null\);[^\n]*\n/g, '');

// Fix TierCard rendering
content = content.replace(
  /<TierCard key=\{i\} tier=\{tier\} index=\{i\} onOpenForm=\{setActiveForm\} \/>/g,
  '<TierCard key={i} tier={tier} index={i} />'
);

// Remove modal rendering
const modalCode = `      {/* Access Form Modal */}
      <AnimatePresence>
        {activeForm && <AccessFormModal formKey={activeForm} onClose={() => setActiveForm(null)} />}
      </AnimatePresence>`;
content = content.replace(modalCode, '');

fs.writeFileSync(file, content);
console.log('Fixed Education.jsx');
