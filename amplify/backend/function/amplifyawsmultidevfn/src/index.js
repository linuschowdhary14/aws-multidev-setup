

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    var customerId = event.pathParameters.customerId;
    var customer = {'customerId': customerId, 'customerName' : 'Customer ' + customerId};
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
         "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify(customer),
    };
};
