Balanced.TxnRefundComponent = Ember.Component.extend({
	submitRefundDebitEvent: 'submitRefundDebit',

	actions: {
		submitRefundDebit: function(refund) {
			this.sendAction('submitRefundDebitEvent', refund);
		}
	}
});
