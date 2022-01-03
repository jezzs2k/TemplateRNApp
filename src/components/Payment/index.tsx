import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CardField,
  StripeProvider,
  useConfirmPayment,
  createPaymentMethod,
  CardFieldInput,
} from '@stripe/stripe-react-native';
import Config from 'react-native-config';
import { responsiveHeight, responsiveWidth, SPACINGS } from 'common';
import { Colors } from 'styles';

const publishableKey = Config.STRIPE_KEY;

function ScripePayment() {
  const { loading } = useConfirmPayment();
  const [cardDetails, setCardDetails] = useState<CardFieldInput.Details | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [titleError, setTextError] = useState('');

  const onAdd = async () => {
    if (!cardDetails) {
      return;
    }
    setLoading(true);
    try {
      const { paymentMethod, error } = await createPaymentMethod({
        type: 'Card',
        cvc: cardDetails.postalCode,
      });

      console.log('paymentMethod, error', paymentMethod, error);
    } catch (error) {
      setTextError('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.com.stripe.react.native"
      threeDSecureParams={{
        backgroundColor: '#FFF',
        timeout: 5,
      }}>
      <View style={styles.container}>
        <CardField
          cardStyle={styles.cardField}
          style={styles.cardStyleContainer}
          onCardChange={setCardDetails}
          placeholder={{
            cvc: 'CVC',
            postalCode: 'ZIP',
            number: 'Card number',
            expiration: 'MM/YY',
          }}
        />
        {/* <Button
          isLoading={isLoading}
          title="Add Card"
          disabled={!cardDetails.complete || loading || isLoading}
          onPress={onAdd}
        /> */}
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: responsiveHeight(40),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(35),
  },
  cardStyleContainer: {
    width: '100%',
    height: 50,
    marginBottom: SPACINGS.default,
  },
  cardField: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.quoteText,
    fontSize: 12,
  },
});

export default ScripePayment;
