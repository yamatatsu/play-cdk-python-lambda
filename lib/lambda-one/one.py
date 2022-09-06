import common

def handler(event, context):
    layerResponse = common.call()
    message = 'one! {} {}! {}'.format(event['first_name'], event['last_name'], layerResponse)  
    return { 
        'message' : message
    }
